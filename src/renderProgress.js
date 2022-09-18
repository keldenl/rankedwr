import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';


const Root = styled('div')(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: 26,
    borderRadius: 2,
}));

const Value = styled('div')({
    position: 'absolute',
    lineHeight: '24px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
});

const Bar = styled('div')({
    height: '100%',
    '&.low': {
        backgroundColor: '#f7a9a3',
    },
    '&.medium': {
        backgroundColor: '#e5e5e5',
    },
    '&.high': {
        backgroundColor: '#47c147',
    },
});

const ProgressBar = React.memo(function ProgressBar(props) {
    const { value } = props;
    const valueInPercent = value * 100;

    return (
        <Root>
            <Value>{`${valueInPercent.toLocaleString()} %`}</Value>
            <Bar
                className={clsx({
                    low: valueInPercent < 48.75,
                    medium: valueInPercent >= 48.75 && valueInPercent <= 51,
                    high: valueInPercent > 51,
                })}
                style={{ maxWidth: `${valueInPercent}%` }}
            />
        </Root>
    );
});

export function renderProgress(params) {
    if (params.value == null) {
        return '';
    }

    // If the aggregated value does not have the same unit as the other cell
    // Then we fall back to the default rendering based on `valueGetter` instead of rendering a progress bar.
    if (params.aggregation && !params.aggregation.hasCellUnit) {
        return null;
    }

    return <ProgressBar value={params.value} />;
}