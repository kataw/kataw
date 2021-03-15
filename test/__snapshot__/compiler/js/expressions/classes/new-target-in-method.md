# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
class A {a(x=new.target){}}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "class A {a(x=new.target){}}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "A",
                    "rawText": "A",
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
                                    "kind": 196711,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 10
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
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 11,
                                                "end": 12
                                            },
                                            "isOptional": false,
                                            "type": null,
                                            "initializer": {
                                                "kind": 4194973,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "target",
                                                    "rawText": "target",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 17,
                                                    "end": 23
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "start": 13,
                                                "end": 23
                                            },
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 11,
                                            "end": 23
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 24
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
                                        "start": 25,
                                        "end": 25
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 26
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 26
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 9,
                            "end": 26
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 27
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 27
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 27
    },
    "jsx": false,
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

