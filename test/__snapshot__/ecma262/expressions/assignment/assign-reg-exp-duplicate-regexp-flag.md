# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input
`````js
x = /x/msuygig;
x = /x/mmsig;
x = /x/ssug;
x = /x/suuygig;
x = /x/msyygi;
x = /x/msii;
// unknown regularexpression flag
x = /x/xxx;
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 371,
                    "text": "/x/msuygig",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 14
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 19
                },
                "right": {
                    "kind": 371,
                    "text": "/x/mmsig",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 28
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 15,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 15,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 31
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 33
                },
                "right": {
                    "kind": 371,
                    "text": "/x/ssug",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 41
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 29,
                "end": 41
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 29,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 44
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 46
                },
                "right": {
                    "kind": 371,
                    "text": "/x/suuygig",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 57
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 42,
                "end": 57
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 42,
            "end": 58
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 58,
                    "end": 60
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 60,
                    "end": 62
                },
                "right": {
                    "kind": 371,
                    "text": "/x/msyygi",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 72
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 58,
                "end": 72
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 58,
            "end": 73
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 73,
                    "end": 75
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 75,
                    "end": 77
                },
                "right": {
                    "kind": 371,
                    "text": "/x/msii",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 85
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 73,
                "end": 85
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 73,
            "end": 86
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 86,
                    "end": 122
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 122,
                    "end": 124
                },
                "right": {
                    "kind": 371,
                    "text": "/x/xxx",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 124,
                    "end": 131
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 86,
                "end": 131
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 86,
            "end": 132
        }
    ],
    "isModule": false,
    "source": "x = /x/msuygig;\nx = /x/mmsig;\nx = /x/ssug;\nx = /x/suuygig;\nx = /x/msyygi;\nx = /x/msii;\n// unknown regularexpression flag\nx = /x/xxx;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 132
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate regular expression flag - start: 12, end: 13
✖ Duplicate regular expression flag - start: 23, end: 24
✖ Duplicate regular expression flag - start: 37, end: 38
✖ Duplicate regular expression flag - start: 51, end: 52
✖ Duplicate regular expression flag - start: 55, end: 56
✖ Duplicate regular expression flag - start: 68, end: 69
✖ Duplicate regular expression flag - start: 83, end: 84
✖ Unknown regular expression flag - start: 127, end: 128
✖ Unknown regular expression flag - start: 128, end: 129
✖ Unknown regular expression flag - start: 129, end: 130

```

