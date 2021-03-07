# Kataw parser test case

## Input

`````js
interface Foo { public foo: string; }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface Foo { public foo: string; }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 13
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 8380,
                            "name": {
                                "kind": 196711,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 26
                            },
                            "isOptional": false,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 15,
                                "end": 22
                            },
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 27,
                                "end": 34
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 15,
                            "end": 35
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 15,
                    "end": 35
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 37
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 37
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

