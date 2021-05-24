# Kataw parser test case

## Input

`````js
foo({bar(){ new.target }})
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
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
                                        "kind": 257,
                                        "asyncKeyword": null,
                                        "generatorToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 5,
                                                "end": 8
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 9,
                                                "end": 10
                                            },
                                            "returnType": null,
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
                                                                "newKeyword": {
                                                                    "kind": 138477661,
                                                                    "flags": 0,
                                                                    "start": 11,
                                                                    "end": 15
                                                                },
                                                                "targetIdentifier": {
                                                                    "kind": 16594,
                                                                    "flags": 0,
                                                                    "start": 16,
                                                                    "end": 22
                                                                },
                                                                "flags": 96,
                                                                "start": 11,
                                                                "end": 22
                                                            },
                                                            "flags": 16,
                                                            "start": 11,
                                                            "end": 22
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "start": 11,
                                                    "end": 22
                                                },
                                                "flags": 32,
                                                "start": 10,
                                                "end": 24
                                            },
                                            "flags": 32,
                                            "start": 8,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 5,
                                "end": 24
                            },
                            "flags": 48,
                            "start": 4,
                            "end": 25
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 4,
                    "end": 25
                },
                "flags": 268435488,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "foo({bar(){ new.target }})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

foo({ bar() {
    new.target;
  } });
```

### Diagnostics

```javascript
✔ No errors
```

