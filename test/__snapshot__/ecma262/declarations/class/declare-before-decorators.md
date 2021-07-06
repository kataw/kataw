# Kataw parser test case

## Input

`````js
class A {
  declare @dec foo
}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 21
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "dec",
                                            "rawText": "dec",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 24
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 24
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 24
                            },
                            "declaredToken": {
                                "kind": 82165,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 19
                            },
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 28
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 19,
                            "end": 28
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 28
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "class A {\n  declare @dec foo\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Decorators cannot follow after a 'static' modifier - start: 19, end: 21

```

