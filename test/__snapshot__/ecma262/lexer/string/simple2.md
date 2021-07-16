# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true, module: true }
`````

## Input

`````js
" a " b "
;
" a " b " c "
;
" a ' b "
;
" a ' b ' c "
;
" a ` b "
;
" a ` b ` c "
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": " a ",
                "rawText": "\" a \"",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 5,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "",
                "rawText": "\"",
                "flags": 96,
                "transformFlags": 0,
                "start": 7,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 7,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": " a ",
                "rawText": "\" a \"",
                "flags": 97,
                "transformFlags": 0,
                "start": 11,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 11,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "transformFlags": 0,
                "start": 17,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 17,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": " c ",
                "rawText": "\" c \"",
                "flags": 96,
                "transformFlags": 0,
                "start": 19,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 19,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": " a ' b ",
                "rawText": "\" a ' b \"",
                "flags": 97,
                "transformFlags": 0,
                "start": 27,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 27,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": " a ' b ' c ",
                "rawText": "\" a ' b ' c \"",
                "flags": 97,
                "transformFlags": 0,
                "start": 39,
                "end": 53
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 39,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": " a ` b ",
                "rawText": "\" a ` b \"",
                "flags": 97,
                "transformFlags": 0,
                "start": 55,
                "end": 65
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 55,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": " a ` b ` c ",
                "rawText": "\" a ` b ` c \"",
                "flags": 97,
                "transformFlags": 0,
                "start": 67,
                "end": 81
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 67,
            "end": 81
        }
    ],
    "isModule": true,
    "source": "\" a \" b \"\n;\n\" a \" b \" c \"\n;\n\" a ' b \"\n;\n\" a ' b ' c \"\n;\n\" a ` b \"\n;\n\" a ` b ` c \"",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 81
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '; ' expected - start: 5, end: 7
✖ Unterminated string literal - start: 7, end: 9
✖ '; ' expected - start: 7, end: 9
✖ '; ' expected - start: 17, end: 19
✖ '; ' expected - start: 19, end: 25

```

