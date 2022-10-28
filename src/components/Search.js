import { Autocomplete, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

import { BASE_URL } from "../api";
import { getUrlFriendlyName } from "../utils";
import { useRef } from "react";

export function Search({ autoFocus = false, size = "medium" }) {
    const router = useRouter();
    const inputRef = useRef();

    const [inputValue, setInputValue] = useState('')
    const [heroData, setHeroData] = useState([]);
    const [heroDataLoaded, setHeroDataLoaded] = useState(false);

    useEffect(() => {
        const fetchHeroes = fetch(`${BASE_URL}/champion/`)
            .then((res) => {
                if (res.ok) return res.json()
                throw new Error('Network response was not ok.')
            })
            .then((contents) => {
                const heroData = contents.heroList.map(hero => {
                    return {
                        label: hero.engName,
                        avatar: hero.avatar
                    }
                })
                setHeroData(heroData)
                setHeroDataLoaded(true)
            })
        Promise.all([fetchHeroes])
    }, [])

    useEffect(() => {
        if (!heroDataLoaded) return;
        if (!autoFocus) return;
        inputRef.current.focus();
    }, [heroDataLoaded])

    const sizeProps = {
        medium: {},
        small: {
            margin: 'dense',
            color: 'secondary',
            size: 'small'
        }
    }

    return (
        <Autocomplete
            disablePortal
            autoFocus
            disableClearable
            popupIcon={""}
            disabled={!heroDataLoaded}
            value={inputValue}
            onChange={(e, value) => {
                e.preventDefault();
                inputRef.current && inputRef.current.blur()
                router.push(`/champion/${getUrlFriendlyName(value.label)}`)
                setInputValue('')
            }}

            id="combo-box-demo"
            options={heroData}
            sx={{ width: '80%', maxWidth: 500, borderRadius: 15 }}
            renderInput={(params) =>
                <TextField
                    {...params}
                    inputRef={inputRef}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    variant="outlined"
                    {...sizeProps[size]}
                    label="Search Champion..."
                    sx={{
                        '& label': { paddingLeft: (theme) => theme.spacing(2) },
                        '& input': { paddingLeft: (theme) => theme.spacing(3.5) },
                        '& fieldset': {
                            paddingLeft: (theme) => theme.spacing(2.5),
                            borderRadius: '30px',
                            borderWidth: '2px'
                        },
                    }}
                />
            }

            renderOption={(props, option) => (
                <Box className='home-suggestions' component="li"
                    sx={{
                        backgroundColor: 'transparent',
                        '& > img': {
                            mr: 2,
                            mt: 1,
                            mb: 1,
                            flexShrink: 0,
                            borderRadius: '100%',
                        }
                    }}
                    {...props}>
                    <img
                        loading="lazy"
                        width="25"
                        src={option.avatar}
                        alt=""
                    />
                    <Typography variant="p">
                        {option.label}
                    </Typography>
                </Box>
            )}
        />
    )
}
