# Kataw parser test case

## Input

`````js
class C { aaa = new.target }
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
                "text": "C",
                "rawText": "C",
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
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "aaa",
                                "rawText": "aaa",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 13
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 211,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 19
                                },
                                "targetIdentifier": {
                                    "kind": 16594,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 26
                                },
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 26
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 26
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 26
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "class C { aaa = new.target }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'new.target' only allowed within functions - start: 15, end: 28

```

