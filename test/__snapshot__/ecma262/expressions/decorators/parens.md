# Kataw parser test case

## Input

`````js
class X {
  @(computed().volatile())
  x
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": {
                                "kind": 207,
                                "elements": [
                                    {
                                        "kind": 34611453,
                                        "decoratorToken": {
                                            "kind": 34611453,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 13
                                        },
                                        "expression": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 13,
                                                "end": 13
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 131,
                                                        "expression": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "computed",
                                                                    "rawText": "computed",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 14,
                                                                    "end": 22
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 23,
                                                                    "end": 23
                                                                },
                                                                "flags": 268435488,
                                                                "transformFlags": 1,
                                                                "start": 14,
                                                                "end": 24
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "volatile",
                                                                "rawText": "volatile",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 25,
                                                                "end": 33
                                                            },
                                                            "flags": 268435488,
                                                            "transformFlags": 2,
                                                            "start": 14,
                                                            "end": 33
                                                        },
                                                        "argumentList": {
                                                            "kind": 256,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 34,
                                                            "end": 34
                                                        },
                                                        "flags": 268435488,
                                                        "transformFlags": 1,
                                                        "start": 14,
                                                        "end": 35
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 14,
                                                "end": 35
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 13,
                                            "end": 36
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 36
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 36
                            },
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 40
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 40
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 40
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "class X {\n  @(computed().volatile())\n  x\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. A decorator name can only be an identifier - start: 13, end: 14

```

