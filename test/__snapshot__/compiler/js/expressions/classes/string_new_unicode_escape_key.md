# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
class x { "prot\u{6f}type"(){} }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "class x { \"prot\\u{6f}type\"(){} }",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "x",
                    "rawText": "x",
                    "flags": 65536,
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
                                    "kind": 4261583,
                                    "text": "prototype",
                                    "rawText": "prototype",
                                    "flags": 2162688,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 9,
                                    "end": 26
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 28
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 29
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 30
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 30
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 9,
                            "end": 30
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 32
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 32
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 32
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

