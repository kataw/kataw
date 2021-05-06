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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 5,
                "end": 9
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "prototype",
                            "rawText": "prototype",
                            "flags": 96,
                            "start": 11,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 11,
                        "end": 21
                    }
                ],
                "flags": 32,
                "start": 11,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 23,
                "end": 30
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 30,
                "end": 34
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 201392131,
                            "text": "prototype",
                            "rawText": "'prototype'",
                            "flags": 4194400,
                            "start": 36,
                            "end": 48
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 36,
                        "end": 48
                    }
                ],
                "flags": 32,
                "start": 36,
                "end": 50
            },
            "flags": 16,
            "start": 23,
            "end": 50
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 50,
                "end": 57
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 57,
                "end": 61
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "prototype",
                            "rawText": "prototype",
                            "flags": 96,
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
                            "start": 75,
                            "end": 77
                        },
                        "flags": 32,
                        "start": 63,
                        "end": 77
                    }
                ],
                "flags": 32,
                "start": 63,
                "end": 79
            },
            "flags": 16,
            "start": 50,
            "end": 79
        }
    ],
    "isModule": false,
    "source": "class Foo { prototype }\n\nclass Foo { 'prototype' }\n\nclass Foo { prototype = 1 }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

