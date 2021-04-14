# Kataw parser test case

## Input

`````js
[foo = A, bar = B] = arr;
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
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
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 81921,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 1,
                                    "end": 4
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 4,
                                    "end": 6
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": "A",
                                    "rawText": "A",
                                    "flags": 768,
                                    "start": 6,
                                    "end": 8
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 8
                            },
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 81921,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 768,
                                    "start": 9,
                                    "end": 13
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 13,
                                    "end": 15
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 768,
                                    "start": 15,
                                    "end": 17
                                },
                                "flags": 256,
                                "start": 9,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 17
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 81921,
                    "text": "arr",
                    "rawText": "arr",
                    "flags": 768,
                    "start": 20,
                    "end": 24
                },
                "flags": 256,
                "start": 0,
                "end": 24
            },
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "[foo = A, bar = B] = arr;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

