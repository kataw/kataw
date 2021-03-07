# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
class A {async set 11(x){}}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class A {async set 11(x){}}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 17827862,
                                "name": {
                                    "kind": 4261540,
                                    "text": 11,
                                    "rawText": "11",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 21
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 22,
                                                "end": 23
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
                                            "start": 22,
                                            "end": 23
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 24
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
                                        "start": 25,
                                        "end": 25
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 26
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 4,
                                "start": 21,
                                "end": 26
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 9,
                            "end": 26
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 27
                },
                "decorators": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 27
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 27
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

