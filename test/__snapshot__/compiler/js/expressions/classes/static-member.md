# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
class A {static set [foo](x){}}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class A {static set [foo](x){}}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "A",
                "rawText": "A",
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
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 65591,
                                "expression": {
                                    "kind": 196712,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 24
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 131073,
                                "start": 19,
                                "end": 25
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 26,
                                            "end": 27
                                        },
                                        "isOptional": false,
                                        "type": null,
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 26,
                                        "end": 27
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 28
                            },
                            "isSetter": true,
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
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 30
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 30
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 9,
                        "end": 30
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 9,
                "end": 31
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "intersects": false,
            "transformFlags": 1,
            "start": 0,
            "end": 31
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
    "end": 31
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

