# Kataw parser test case

## Input

`````js
([..."foo".foo=x]) => x
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 18,
                    "start": 0,
                    "end": 21
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 223,
                                    "ellipsisToken": {
                                        "kind": 524302,
                                        "flags": 2,
                                        "start": 0,
                                        "end": 5
                                    },
                                    "argument": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 201392131,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 768,
                                                "start": 5,
                                                "end": 10
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 768,
                                                "start": 11,
                                                "end": 14
                                            },
                                            "flags": 256,
                                            "start": 5,
                                            "end": 14
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 14,
                                            "start": 512,
                                            "end": 15
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 15,
                                            "end": 16
                                        },
                                        "flags": 256,
                                        "start": 5,
                                        "end": 16
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 16
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 2,
                            "end": 16
                        },
                        "flags": 256,
                        "start": 1,
                        "end": 17
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 21,
                    "end": 23
                },
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "([...\"foo\".foo=x]) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 18, end: 21

```

