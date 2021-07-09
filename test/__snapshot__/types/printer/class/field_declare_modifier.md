# Kataw parser test case

## Input

`````js
class Foo {
  declare foo: number;
  declare static bar: string;
}
`````

## Options

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
                            "declaredToken": {
                                "kind": 82165,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 21
                            },
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 25
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 33
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 33
                            },
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 21,
                            "end": 33
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 34
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": {
                                "kind": 82165,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 44
                            },
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 51
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 51,
                                "end": 55
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 56,
                                    "end": 63
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 56,
                                "end": 63
                            },
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 51,
                            "end": 63
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 63,
                            "end": 64
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 64
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 66
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 66
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  declare foo: number;\n  declare static bar: string;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 66
}
```

### Printed

```javascript
class Foo {
  declare foo: number;;
  declare static bar: string;;
}
```

### Diagnostics

```javascript
✔ No errors
```

