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

### Hybrid CST

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
                "rawText": " a ",
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "flags": 128,
            "start": 5,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "",
                "rawText": " \"",
                "flags": 33555200,
                "start": 7,
                "end": 9
            },
            "flags": 128,
            "start": 7,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": " a ",
                "rawText": " a ",
                "flags": 769,
                "start": 11,
                "end": 17
            },
            "flags": 128,
            "start": 11,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 768,
                "start": 17,
                "end": 19
            },
            "flags": 128,
            "start": 17,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": " c ",
                "rawText": " c ",
                "flags": 768,
                "start": 19,
                "end": 25
            },
            "flags": 128,
            "start": 19,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": " a ' b ",
                "rawText": " a ' b ",
                "flags": 769,
                "start": 27,
                "end": 37
            },
            "flags": 128,
            "start": 27,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": " a ' b ' c ",
                "rawText": " a ' b ' c ",
                "flags": 769,
                "start": 39,
                "end": 53
            },
            "flags": 128,
            "start": 39,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": " a ` b ",
                "rawText": " a ` b ",
                "flags": 769,
                "start": 55,
                "end": 65
            },
            "flags": 128,
            "start": 55,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": " a ` b ` c ",
                "rawText": " a ` b ` c ",
                "flags": 769,
                "start": 67,
                "end": 81
            },
            "flags": 128,
            "start": 67,
            "end": 81
        }
    ],
    "isModule": true,
    "text": "\" a \" b \"\n;\n\" a \" b \" c \"\n;\n\" a ' b \"\n;\n\" a ' b ' c \"\n;\n\" a ` b \"\n;\n\" a ` b ` c \"",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 5,
            "end": 7
        },
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 7,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 7,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 17,
            "end": 19
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19,
            "end": 25
        }
    ],
    "start": 0,
    "end": 81
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

