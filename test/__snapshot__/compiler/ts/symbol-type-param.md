# Kataw parser test case

## Input

`````js
function test(abc: Map<symbol, string>) {}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function test(abc: Map<symbol, string>) {}",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "test",
                "rawText": "test",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 8,
                "end": 13
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "abc",
                            "rawText": "abc",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 14,
                            "end": 17
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "Map",
                                "rawText": "Map",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 22
                            },
                            "typeArguments": {
                                "kind": 8419,
                                "typeArgumentsList": [
                                    {
                                        "kind": 8403,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 23,
                                        "end": 29
                                    },
                                    {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 30,
                                        "end": 37
                                    }
                                ],
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 23,
                                "end": 37
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 18,
                            "end": 39
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 14,
                        "end": 38
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 14,
                "end": 39
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 41
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 39,
                "end": 42
            },
            "typeParameters": null,
            "flags": 0,
            "intersects": false,
            "transformFlags": 256,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

