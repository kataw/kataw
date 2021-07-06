# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
let await;
class C {
  static {
    let { await } = {}; // illegal, cannot declare a new binding for await
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 10
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 10,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 18
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 305,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 29
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 41951307,
                                                "flags": 81,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 39
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 212,
                                                            "propertyList": {
                                                                "kind": 213,
                                                                "properties": [
                                                                    {
                                                                        "kind": 134299649,
                                                                        "text": "await",
                                                                        "rawText": "await",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 41,
                                                                        "end": 47
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 41,
                                                                "end": 47
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 39,
                                                            "end": 49
                                                        },
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 53,
                                                                "end": 53
                                                            },
                                                            "flags": 48,
                                                            "transformFlags": 8,
                                                            "start": 51,
                                                            "end": 54
                                                        },
                                                        "flags": 16,
                                                        "transformFlags": 128,
                                                        "start": 39,
                                                        "end": 54
                                                    }
                                                ],
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 54
                                            },
                                            "flags": 33554448,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 55
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 55
                                },
                                "flags": 20,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 110
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 110
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 110
                },
                "flags": 18,
                "transformFlags": 0,
                "start": 32,
                "end": 112
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 10,
            "end": 112
        }
    ],
    "isModule": false,
    "source": "let await;\nclass C {\n  static {\n    let { await } = {}; // illegal, cannot declare a new binding for await\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 112
}
```

### Printed

```javascript

let await;
class C {
  
}

```

### Diagnostics

```javascript
✔ No errors
```

