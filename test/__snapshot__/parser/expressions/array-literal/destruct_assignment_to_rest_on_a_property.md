# Kataw parser test case

## Input

`````js
[..."foo".bar] = x
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
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 768,
                                        "start": 4,
                                        "end": 9
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 768,
                                        "start": 10,
                                        "end": 13
                                    },
                                    "flags": 256,
                                    "start": 4,
                                    "end": 13
                                },
                                "flags": 256,
                                "start": 1,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 1,
                        "end": 13
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 14,
                    "end": 16
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 16,
                    "end": 18
                },
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "[...\"foo\".bar] = x",
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
@{x2716}@ The left-hand side of an assignment expression must be a variable or a property access - start: 14, end: 16

```

