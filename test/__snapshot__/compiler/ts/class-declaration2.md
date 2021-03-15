# Kataw parser test case

## Input

`````js
class Foo { readonly private foo; } // wrong

class Foo { private readonly foo; } // correct
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class Foo { readonly private foo; } // wrong\n\nclass Foo { private readonly foo; } // correct",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 5,
                "end": 9
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "private",
                            "rawText": "private",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 28
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": true,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 11,
                        "end": 28
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 32
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 28,
                        "end": 33
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 11,
                "end": 35
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 35
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 51,
                "end": 55
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 74,
                            "end": 78
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": true,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194485,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 57,
                            "end": 65
                        },
                        "isStatic": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 57,
                        "end": 79
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 57,
                "end": 81
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 35,
            "end": 81
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 29,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 92
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

