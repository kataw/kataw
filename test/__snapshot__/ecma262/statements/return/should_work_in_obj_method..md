# Kataw parser test case

## Input

`````js
({foo(){ return }})
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 5
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 6,
                                        "end": 7
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 161,
                                                    "returnKeyword": {
                                                        "kind": 37757022,
                                                        "flags": 80,
                                                        "start": 8,
                                                        "end": 15
                                                    },
                                                    "expression": null,
                                                    "flags": 80,
                                                    "start": 8,
                                                    "end": 15
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 8,
                                            "end": 15
                                        },
                                        "flags": 32,
                                        "start": 7,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 17
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 17
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 18
                },
                "flags": 0,
                "start": 34,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "({foo(){ return }})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

({foo() {
      return;
    }});
```

### Diagnostics

```javascript
✔ No errors
```

