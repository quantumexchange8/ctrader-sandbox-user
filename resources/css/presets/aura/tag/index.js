export default {
    root: ({ props }) => ({
        class: [
            //Font
            'text-xs font-bold',

            //Alignments
            'inline-flex items-center justify-center',

            //Spacing
            'px-[0.4rem] py-1',

            //Shape
            {
                'rounded-md': !props.rounded,
                'rounded-full': props.rounded
            },

            //Colors
            {
                'bg-highlight': props.severity === null || props.severity === 'primary',
                'text-green-600 bg-green-100': props.severity === 'success',
                'text-surface-700 dark:text-surface-300 bg-surface-100 dark:bg-surface-500/20': props.severity === 'secondary',
                'text-blue-700 bg-blue-100': props.severity === 'info',
                'text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-500/20': props.severity === 'warn',
                'text-red-700 bg-red-100': props.severity === 'danger',
                'text-surface-0 dark:text-surface-900 bg-surface-900 dark:bg-surface-0': props.severity === 'contrast'
            }
        ]
    }),
    value: {
        class: 'leading-normal'
    },
    icon: {
        class: 'mr-1 text-sm'
    }
};
