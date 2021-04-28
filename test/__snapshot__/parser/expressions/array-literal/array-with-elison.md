# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
[ ,,,,];

[ ,,a , b,];
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 1,
                            "end": 1
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 3,
                            "end": 3
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 4,
                            "end": 4
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 5,
                            "end": 5
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 1,
                    "end": 6
                },
                "flags": 32,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 11,
                            "end": 11
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "start": 13,
                            "end": 13
                        },
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 14,
                            "end": 15
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "start": 11,
                    "end": 20
                },
                "flags": 32,
                "start": 8,
                "end": 21
            },
            "flags": 16,
            "start": 8,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "[ ,,,,];\n\n[ ,,a , b,];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

