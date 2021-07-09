# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class Foo {
  static bar = 42;
  static {
    this.foo = Foo.bar;
  }
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
                                "end": 20
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 24
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 29
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 20,
                            "end": 29
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 30
                        },
                        {
                            "kind": 305,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 39
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 41,
                                                        "end": 50
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 51,
                                                        "end": 54
                                                    },
                                                    "flags": 97,
                                                    "transformFlags": 2,
                                                    "start": 41,
                                                    "end": 54
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 54,
                                                    "end": 56
                                                },
                                                "right": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 134299649,
                                                        "text": "Foo",
                                                        "rawText": "Foo",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 56,
                                                        "end": 60
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 61,
                                                        "end": 64
                                                    },
                                                    "flags": 96,
                                                    "transformFlags": 2,
                                                    "start": 56,
                                                    "end": 64
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 41,
                                                "end": 64
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 41,
                                            "end": 65
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 41,
                                    "end": 65
                                },
                                "flags": 30,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 69
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 69
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 69
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 71
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  static bar = 42;\n  static {\n    this.foo = Foo.bar;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript
class Foo {
  static bar = 42;;

}
```

### Diagnostics

```javascript
✔ No errors
```

