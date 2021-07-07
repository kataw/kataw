# Kataw parser test case

## Input

`````js
({
  *(){}
})
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
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 65,
                                    "transformFlags": 32,
                                    "start": 2,
                                    "end": 6
                                },
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 6
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 160,
                                        "transformFlags": 0,
                                        "start": 7,
                                        "end": 8
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 9
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "flags": 160,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 10
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 10
                            }
                        ],
                        "trailingComma": false,
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 10
                    },
                    "flags": 49,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 12
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "({\n  *(){}\n})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 6, end: 7

```

