# Kataw parser test case

## Input

`````js
class Foo { prototype }

class Foo { 'prototype' }

class Foo { prototype = 1 }
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
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 9
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
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "prototype",
                                "rawText": "prototype",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 21
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 11,
                            "end": 21
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 21
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 23,
                "end": 30
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 30,
                "end": 34
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
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 201392131,
                                "text": "prototype",
                                "rawText": "'prototype'",
                                "flags": 4194400,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 48
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 36,
                            "end": 48
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 48
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 32,
                "end": 50
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 23,
            "end": 50
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 50,
                "end": 57
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 57,
                "end": 61
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
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "prototype",
                                "rawText": "prototype",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 63,
                                "end": 73
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 75,
                                "end": 77
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 63,
                            "end": 77
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 63,
                    "end": 77
                },
                "flags": 61,
                "transformFlags": 0,
                "start": 32,
                "end": 79
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 50,
            "end": 79
        }
    ],
    "isModule": false,
    "source": "class Foo { prototype }\n\nclass Foo { 'prototype' }\n\nclass Foo { prototype = 1 }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate bindingidentifier 'Foo' - start: 30, end: 34
✖ Duplicate bindingidentifier 'Foo' - start: 57, end: 61

```

