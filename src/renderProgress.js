import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';


const Root = styled('div')(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: 25,
    borderRadius: 5,
}));

const Value = styled('div')({
    position: 'absolute',
    fontSize: '0.85em',
    lineHeight: '25px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
});

const Bar = styled('div')({
    height: '100%',
    '&.low': {
        backgroundColor: '#f7a9a370',
    },
    '&.medium': {
        backgroundColor: '#d5d5d570',
    },
    '&.high': {
        backgroundColor: '#47c14770',
    },
});

export const levels = {
    'win': {
        low: 48.75,
        medium: 51,
    },
    'pick': {
        low: 3,
        medium: 8,
    },
    'ban': {
        low: 5,
        medium: 15,
    }
}

const ProgressBar = React.memo(function ProgressBar(props) {
    const { value, field } = props;
    const valueInPercent = value * 100;

    return (
        <Root>
            <Value>{`${parseFloat(valueInPercent).toFixed(1).toLocaleString()}%`}</Value>
            <Bar
                className={clsx({
                    low: valueInPercent < levels[field].low,
                    medium: valueInPercent >= levels[field].low && valueInPercent <= levels[field].medium,
                    high: valueInPercent > levels[field].medium,
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

    return <ProgressBar value={params.value} field={params.field} />;
}