# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
class B {
    @onlyRead(false)
    instanceMethod() {}
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class B {\n    @onlyRead(false)\n    instanceMethod() {}\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "B",
                "rawText": "B",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "instanceMethod",
                                "rawText": "instanceMethod",
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 49
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 51
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 53
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 54
                            },
                            "decorators": {
                                "kind": 64,
                                "decoratorList": [
                                    {
                                        "kind": 63,
                                        "expression": {
                                            "kind": 1073807915,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "onlyRead",
                                                "rawText": "onlyRead",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 23
                                            },
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 3,
                                                "elements": [
                                                    {
                                                        "kind": 4260391,
                                                        "text": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 24,
                                                        "end": 29
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "transformFlags": 0,
                                                "flags": 32768,
                                                "intersects": false,
                                                "start": 29,
                                                "end": 30
                                            },
                                            "flags": 32768,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 30
                                        },
                                        "flags": 32768,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 15,
                                        "end": 30
                                    }
                                ],
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 15,
                                "end": 30
                            },
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 54
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 9,
                        "end": 54
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 9,
                "end": 56
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "intersects": false,
            "transformFlags": 1,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 56
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

