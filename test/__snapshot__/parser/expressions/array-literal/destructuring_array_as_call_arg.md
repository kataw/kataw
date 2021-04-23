# Kataw parser test case

## Input

`````js
foo([a, b] = arr);
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 5,
                                            "end": 6
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 7,
                                            "end": 9
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 5,
                                    "end": 9
                                },
                                "flags": 256,
                                "start": 4,
                                "end": 10
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 10,
                                "end": 12
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "arr",
                                "rawText": "arr",
                                "flags": 768,
                                "start": 12,
                                "end": 16
                            },
                            "flags": 256,
                            "start": 4,
                            "end": 16
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 4,
                    "end": 16
                },
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "foo([a, b] = arr);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

