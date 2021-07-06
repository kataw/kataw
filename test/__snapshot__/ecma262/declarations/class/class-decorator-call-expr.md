# Kataw parser test case

## Input

`````js
@foo('bar')
class Foo {}
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
            "decorators": {
                "kind": 207,
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 1
                        },
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 4
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 201392131,
                                        "text": "bar",
                                        "rawText": "'bar'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 10
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 1,
                            "end": 11
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 11
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 11
            },
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 17,
                "end": 21
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 23
                },
                "flags": 21,
                "transformFlags": 0,
                "start": 32,
                "end": 24
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "@foo('bar')\nclass Foo {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

@ foo("'bar'") class Foo {}
```

### Diagnostics

```javascript
✔ No errors
```

