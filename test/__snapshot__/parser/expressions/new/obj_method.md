# Kataw parser test case

## Input

`````js
foo({bar(){ new.target }})
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
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 768,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "typeParameters": null,
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 256,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "type": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [
                                                    {
                                                        "kind": 120,
                                                        "expression": {
                                                            "kind": 211,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "target",
                                                                "rawText": "target",
                                                                "flags": 768,
                                                                "start": 16,
                                                                "end": 22
                                                            },
                                                            "flags": 768,
                                                            "start": 11,
                                                            "end": 22
                                                        },
                                                        "flags": 128,
                                                        "start": 11,
                                                        "end": 22
                                                    }
                                                ],
                                                "multiline": false,
                                                "flags": 256,
                                                "start": 11,
                                                "end": 22
                                            },
                                            "flags": 256,
                                            "start": 10,
                                            "end": 24
                                        },
                                        "flags": 256,
                                        "start": 8,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 5,
                                "end": 24
                            },
                            "flags": 256,
                            "start": 4,
                            "end": 25
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 4,
                    "end": 25
                },
                "flags": 256,
                "start": 0,
                "end": 26
            },
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "foo({bar(){ new.target }})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
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

