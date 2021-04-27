# Kataw parser test case

## Input

`````js
[...x.list] = a;
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
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 768,
                                    "start": 1,
                                    "end": 4
                                },
                                "argument": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 4,
                                        "end": 5
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "list",
                                        "rawText": "list",
                                        "flags": 768,
                                        "start": 6,
                                        "end": 10
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 4,
                                    "end": 10
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 10
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 10
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 11,
                    "end": 13
                },
                "right": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 768,
                    "start": 13,
                    "end": 15
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "[...x.list] = a;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

