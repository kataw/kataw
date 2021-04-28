# Kataw parser test case

## Input

`````js
[foo, [x,y = 20,z], bar = B] = arr;
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
                                "kind": 134299649,
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
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 7,
                                            "end": 8
                                        },
                                        {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 768,
                                                "start": 9,
                                                "end": 10
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 10,
                                                "start": 512,
                                                "end": 12
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 20,
                                                "rawText": "20",
                                                "flags": 768,
                                                "start": 12,
                                                "end": 15
                                            },
                                            "flags": 256,
                                            "start": 9,
                                            "end": 15
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 768,
                                            "start": 16,
                                            "end": 17
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 7,
                                    "end": 17
                                },
                                "flags": 256,
                                "start": 5,
                                "end": 18
                            },
                            {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 768,
                                    "start": 19,
                                    "end": 23
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 23,
                                    "start": 512,
                                    "end": 25
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 768,
                                    "start": 25,
                                    "end": 27
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 27
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 28
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 28,
                    "start": 512,
                    "end": 30
                },
                "right": {
                    "kind": 134299649,
                    "text": "arr",
                    "rawText": "arr",
                    "flags": 768,
                    "start": 30,
                    "end": 34
                },
                "flags": 256,
                "start": 0,
                "end": 34
            },
            "flags": 128,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "[foo, [x,y = 20,z], bar = B] = arr;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
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

