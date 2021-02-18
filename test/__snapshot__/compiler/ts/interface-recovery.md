# Kataw parser test case

## Input

`````js
interface Foo {
  private a;
  public b;
  protected c;
  static d;
  declare e;
  abstract f;
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface Foo {\n  private a;\n  public b;\n  protected c;\n  static d;\n  declare e;\n  abstract f;\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 119,
                "name": {
                    "kind": 196712,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 9,
                    "end": 13
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 188,
                            "name": {
                                "kind": 196711,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 25,
                                "end": 27
                            },
                            "isOptional": false,
                            "accessModifier": {
                                "kind": 4194485,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 15,
                                "end": 25
                            },
                            "type": null,
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 15,
                            "end": 28
                        },
                        {
                            "kind": 188,
                            "name": {
                                "kind": 196711,
                                "text": "b",
                                "rawText": "b",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 37,
                                "end": 39
                            },
                            "isOptional": false,
                            "accessModifier": {
                                "kind": 4194493,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 28,
                                "end": 37
                            },
                            "type": null,
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 28,
                            "end": 40
                        },
                        {
                            "kind": 188,
                            "name": {
                                "kind": 196711,
                                "text": "c",
                                "rawText": "c",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 52,
                                "end": 54
                            },
                            "isOptional": false,
                            "accessModifier": {
                                "kind": 4194493,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 40,
                                "end": 52
                            },
                            "type": null,
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 40,
                            "end": 55
                        },
                        {
                            "kind": 188,
                            "name": {
                                "kind": 196711,
                                "text": "static",
                                "rawText": "static",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 55,
                                "end": 64
                            },
                            "isOptional": false,
                            "accessModifier": null,
                            "type": null,
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 55,
                            "end": 64
                        },
                        {
                            "kind": 188,
                            "name": {
                                "kind": 196711,
                                "text": "d",
                                "rawText": "d",
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 64,
                                "end": 66
                            },
                            "isOptional": false,
                            "accessModifier": null,
                            "type": null,
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 64,
                            "end": 67
                        },
                        {
                            "kind": 188,
                            "name": {
                                "kind": 196711,
                                "text": "declare",
                                "rawText": "declare",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 67,
                                "end": 77
                            },
                            "isOptional": false,
                            "accessModifier": null,
                            "type": null,
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 67,
                            "end": 77
                        },
                        {
                            "kind": 188,
                            "name": {
                                "kind": 196711,
                                "text": "e",
                                "rawText": "e",
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 77,
                                "end": 79
                            },
                            "isOptional": false,
                            "accessModifier": null,
                            "type": null,
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 77,
                            "end": 80
                        },
                        {
                            "kind": 188,
                            "name": {
                                "kind": 196711,
                                "text": "abstract",
                                "rawText": "abstract",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 80,
                                "end": 91
                            },
                            "isOptional": false,
                            "accessModifier": null,
                            "type": null,
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 80,
                            "end": 91
                        },
                        {
                            "kind": 188,
                            "name": {
                                "kind": 196711,
                                "text": "f",
                                "rawText": "f",
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 91,
                                "end": 93
                            },
                            "isOptional": false,
                            "accessModifier": null,
                            "type": null,
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 91,
                            "end": 94
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 15,
                    "end": 94
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 96
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 96
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 65,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 78,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 92,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 96
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

