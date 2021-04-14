# Kataw parser test case

## Input

`````js
[foo, [x,y,z], bar = B] = arr;
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
                                "kind": 81921,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 768,
                                "start": 1,
                                "end": 4
                            },
                            {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 81921,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 7,
                                            "end": 8
                                        },
                                        {
                                            "kind": 81921,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 768,
                                            "start": 9,
                                            "end": 10
                                        },
                                        {
                                            "kind": 81921,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 768,
                                            "start": 11,
                                            "end": 12
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 7,
                                    "end": 12
                                },
                                "flags": 256,
                                "start": 5,
                                "end": 13
                            },
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 81921,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 768,
                                    "start": 14,
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
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 768,
                                    "start": 20,
                                    "end": 22
                                },
                                "flags": 256,
                                "start": 14,
                                "end": 22
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 22
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 23
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 23,
                    "end": 25
                },
                "right": {
                    "kind": 81921,
                    "text": "arr",
                    "rawText": "arr",
                    "flags": 768,
                    "start": 25,
                    "end": 29
                },
                "flags": 256,
                "start": 0,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "[foo, [x,y,z], bar = B] = arr;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

