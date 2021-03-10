# Kataw parser test case

## Input

`````js
class Test {
    static member = async (x: string) => { };
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class Test {\n    static member = async (x: string) => { };\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "Test",
                    "rawText": "Test",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 10
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "member",
                                "rawText": "member",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 30
                            },
                            "isInKeyword": false,
                            "expression": null,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 65552,
                                "typeParameters": null,
                                "arrowParameters": {
                                    "kind": 65545,
                                    "elements": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 4325406,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 40,
                                                "end": 41
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 42,
                                                "end": 49
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 40,
                                            "end": 49
                                        }
                                    ],
                                    "type": null,
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 41,
                                    "end": 50
                                },
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 55,
                                        "end": 55
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 57
                                },
                                "flags": 536870912,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 57
                            },
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": true,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 12,
                            "end": 58
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 12,
                    "end": 60
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 60
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 60
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

