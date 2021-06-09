# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
x = 0b00___11;

x = 0b00___11___________;

x = 0o0011___________;
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
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "x",
                    "flags": 96,
                    "start": 3,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "__11",
                "rawText": "__11",
                "flags": 96,
                "start": 9,
                "end": 13
            },
            "flags": 16,
            "start": 9,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 14,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 17,
                    "end": 19
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "x",
                    "flags": 96,
                    "start": 19,
                    "end": 25
                },
                "flags": 32,
                "start": 14,
                "end": 25
            },
            "flags": 16,
            "start": 14,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "__11___________",
                "rawText": "__11___________",
                "flags": 96,
                "start": 25,
                "end": 40
            },
            "flags": 16,
            "start": 25,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 41,
                    "end": 44
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 44,
                    "end": 46
                },
                "right": {
                    "kind": 201392130,
                    "text": 9,
                    "rawText": "x",
                    "flags": 96,
                    "start": 46,
                    "end": 52
                },
                "flags": 32,
                "start": 41,
                "end": 52
            },
            "flags": 16,
            "start": 41,
            "end": 52
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1___________",
                "flags": 65632,
                "start": 52,
                "end": 64
            },
            "flags": 16,
            "start": 52,
            "end": 65
        }
    ],
    "isModule": true,
    "source": "x = 0b00___11;\n\nx = 0b00___11___________;\n\nx = 0o0011___________;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 65
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Multiple consecutive numeric separators are not permitted - start: 8, end: 9
✖ Expected a `;` - start: 9, end: 13
✖ Multiple consecutive numeric separators are not permitted - start: 24, end: 25
✖ Expected a `;` - start: 25, end: 40
✖ Multiple consecutive numeric separators are not permitted - start: 53, end: 54
✖ Numeric separators not allowed here - start: 52, end: 53
✖ Numeric separators not allowed here - start: 52, end: 53
✖ Numeric separators not allowed here - start: 52, end: 53
✖ Numeric separators not allowed here - start: 52, end: 53
✖ Numeric separators not allowed here - start: 52, end: 53
✖ Numeric separators not allowed here - start: 52, end: 53
✖ Numeric separators not allowed here - start: 52, end: 53
✖ Numeric separators not allowed here - start: 52, end: 53
✖ Numeric separators not allowed here - start: 52, end: 53
✖ Numeric separators not allowed here - start: 52, end: 53
✖ Numeric separators not allowed here - start: 52, end: 53
✖ Expected a `;` - start: 52, end: 64

```

