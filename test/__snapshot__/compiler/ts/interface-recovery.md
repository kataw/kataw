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
    "kind": 2243,
    "source": "interface Foo {\n  private a;\n  public b;\n  protected c;\n  static d;\n  declare e;\n  abstract f;\n}",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 13
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 27
                        },
                        "isOptional": false,
                        "accessModifier": {
                            "kind": 4194485,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 15,
                            "end": 25
                        },
                        "type": null,
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 15,
                        "end": 28
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "b",
                            "rawText": "b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 39
                        },
                        "isOptional": false,
                        "accessModifier": {
                            "kind": 4194494,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 28,
                            "end": 37
                        },
                        "type": null,
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 28,
                        "end": 40
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "c",
                            "rawText": "c",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 54
                        },
                        "isOptional": false,
                        "accessModifier": {
                            "kind": 4194493,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 40,
                            "end": 52
                        },
                        "type": null,
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 40,
                        "end": 55
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "d",
                            "rawText": "d",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 64,
                            "end": 66
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": null,
                        "isStatic": true,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 55,
                        "end": 67
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "declare",
                            "rawText": "declare",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 77
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": null,
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 67,
                        "end": 77
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "e",
                            "rawText": "e",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 77,
                            "end": 79
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": null,
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 77,
                        "end": 80
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "abstract",
                            "rawText": "abstract",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 80,
                            "end": 91
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": null,
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 80,
                        "end": 91
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "f",
                            "rawText": "f",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 91,
                            "end": 93
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": null,
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 91,
                        "end": 94
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 15,
                "end": 94
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 96
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
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
    "original": null,
    "symbol": null,
    "flags": 0,
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

