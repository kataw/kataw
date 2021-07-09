# Kataw parser test case

## Input

`````js
class A {
  @dec
  ['name'](){}
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
                "text": "A",
                "rawText": "A",
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
                                                "kind": 130,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "dec",
                                                    "rawText": "dec",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 13,
                                                    "end": 16
                                                },
                                                "expression": {
                                                    "kind": 201392131,
                                                    "text": "name",
                                                    "rawText": "'name'",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 20,
                                                    "end": 26
                                                },
                                                "flags": 536870944,
                                                "transformFlags": 4,
                                                "start": 13,
                                                "end": 27
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 28
                                            },
                                            "flags": 268435488,
                                            "transformFlags": 1,
                                            "start": 13,
                                            "end": 29
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 29
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 29
                            },
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 29
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 29
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 29
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 30,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 29,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "class A {\n  @dec\n  ['name'](){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 29, end: 30
✖ Declaration or statement expected - start: 31, end: 33

```

