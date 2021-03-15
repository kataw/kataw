# Kataw parser test case

## Input

`````js
abstract interface Foo {
  foo: string;
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "abstract interface Foo {\n  foo: string;\n}",
    "filename": "",
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
                "start": 18,
                "end": 22
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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 30
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 31,
                            "end": 38
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 24,
                        "end": 39
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 24,
                "end": 39
            },
            "flags": 536870913,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 8,
            "end": 41
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'abstract' modifier can only appear on a class, method or property declaration",
            "start": 9,
            "length": 8
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

