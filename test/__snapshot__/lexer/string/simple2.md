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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": " a ",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "b",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "autofix": 0,
            "flags": 128,
            "start": 5,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "",
                "autofix": 0,
                "flags": 768,
                "start": 7,
                "end": 9
            },
            "autofix": 0,
            "flags": 128,
            "start": 7,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": " a ",
                "autofix": 0,
                "flags": 768,
                "start": 11,
                "end": 17
            },
            "autofix": 0,
            "flags": 128,
            "start": 11,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "b",
                "autofix": 0,
                "flags": 768,
                "start": 17,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 17,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": " c ",
                "autofix": 0,
                "flags": 768,
                "start": 19,
                "end": 25
            },
            "autofix": 0,
            "flags": 128,
            "start": 19,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": " a ' b ",
                "autofix": 0,
                "flags": 768,
                "start": 27,
                "end": 37
            },
            "autofix": 0,
            "flags": 128,
            "start": 27,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": " a ' b ' c ",
                "autofix": 0,
                "flags": 768,
                "start": 39,
                "end": 53
            },
            "autofix": 0,
            "flags": 128,
            "start": 39,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": " a ` b ",
                "autofix": 0,
                "flags": 768,
                "start": 55,
                "end": 65
            },
            "autofix": 0,
            "flags": 128,
            "start": 55,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": " a ` b ` c ",
                "autofix": 0,
                "flags": 768,
                "start": 67,
                "end": 81
            },
            "autofix": 0,
            "flags": 128,
            "start": 67,
            "end": 81
        }
    ],
    "isModule": true,
    "text": "\" a \" b \"\n;\n\" a \" b \" c \"\n;\n\" a ' b \"\n;\n\" a ' b ' c \"\n;\n\" a ` b \"\n;\n\" a ` b ` c \"",
    "fileName": "__root__",
    "autofix": 0,
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

