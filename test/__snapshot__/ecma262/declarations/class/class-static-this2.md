# Kataw parser test case

## Input

`````js
class Foo { static x = () => this }
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 18
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 20
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 24
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 28
                                },
                                "contents": {
                                    "kind": 4276321,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 33
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 33
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 18,
                            "end": 33
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 33
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "class Foo { static x = () => this }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
class Foo {
  static x = () => this;
}
```

### Diagnostics

```javascript
✔ No errors
```

