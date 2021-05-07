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
                "start": 0,
                "end": 5
            },
            "flags": 16,
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
                "start": 5,
                "end": 7
            },
            "flags": 16,
            "start": 5,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "",
                "rawText": "\"",
                "flags": 2097248,
                "start": 7,
                "end": 9
            },
            "flags": 16,
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
                "start": 11,
                "end": 17
            },
            "flags": 16,
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
                "start": 17,
                "end": 19
            },
            "flags": 16,
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
                "start": 19,
                "end": 25
            },
            "flags": 16,
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
                "start": 27,
                "end": 37
            },
            "flags": 16,
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
                "start": 39,
                "end": 53
            },
            "flags": 16,
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
                "start": 55,
                "end": 65
            },
            "flags": 16,
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
                "start": 67,
                "end": 81
            },
            "flags": 16,
            "start": 67,
            "end": 81
        }
    ],
    "isModule": true,
    "source": "\" a \" b \"\n;\n\" a \" b \" c \"\n;\n\" a ' b \"\n;\n\" a ' b ' c \"\n;\n\" a ` b \"\n;\n\" a ` b ` c \"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 81
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 5, end: 7
✖ Unterminated string literal - start: 7, end: 9
✖ Expected a `;` - start: 7, end: 9
✖ Expected a `;` - start: 17, end: 19
✖ Expected a `;` - start: 19, end: 25

```

