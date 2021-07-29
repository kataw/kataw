# Kataw parser test case

## Input

`````js
class C {
  x = super.y
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
                                "text": "x",
                                "rawText": "x",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 13
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 129,
                                "member": {
                                    "kind": 4259935,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 21
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 23
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 15,
                                "end": 23
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 23
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 23
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "class C {\n  x = super.y\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 15, end: 22

```

