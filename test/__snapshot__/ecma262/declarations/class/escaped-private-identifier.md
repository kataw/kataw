# Kataw parser test case

## Input

`````js
class x { #fo\u006f; foo = this.#foo }

class y { #fo\u0020 }

class z { #\u0020oo }

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
                "text": "x",
                "rawText": "x",
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
                                "text": "#fofoo",
                                "rawText": "#fo",
                                "flags": 16480,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 13
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 13
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "o",
                                "rawText": "\\u006f",
                                "flags": 16480,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 19
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 13,
                            "end": 19
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 20
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 24
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 129,
                                "member": {
                                    "kind": 4276321,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 31
                                },
                                "expression": {
                                    "kind": 67191035,
                                    "text": "#foo",
                                    "rawText": "#foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 36
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 26,
                                "end": 36
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 20,
                            "end": 36
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 36
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 38,
                "end": 45
            },
            "name": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 45,
                "end": 47
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
                                "text": "#fofo ",
                                "rawText": "#fo",
                                "flags": 16480,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 53
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 49,
                            "end": 53
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": " ",
                                "rawText": "\\u0020",
                                "flags": 16480,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 59
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 53,
                            "end": 59
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 49,
                    "end": 59
                },
                "flags": 47,
                "transformFlags": 0,
                "start": 32,
                "end": 61
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 38,
            "end": 61
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 61,
                "end": 68
            },
            "name": {
                "kind": 134299649,
                "text": "z",
                "rawText": "z",
                "flags": 96,
                "transformFlags": 0,
                "start": 68,
                "end": 70
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
                                "text": "# oo",
                                "rawText": "#",
                                "flags": 16480,
                                "transformFlags": 0,
                                "start": 72,
                                "end": 74
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 72,
                            "end": 74
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": " oo",
                                "rawText": "\\u0020oo",
                                "flags": 16480,
                                "transformFlags": 0,
                                "start": 74,
                                "end": 82
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 74,
                            "end": 82
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 72,
                    "end": 82
                },
                "flags": 70,
                "transformFlags": 0,
                "start": 32,
                "end": 84
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 61,
            "end": 84
        }
    ],
    "isModule": false,
    "source": "class x { #fo\\u006f; foo = this.#foo }\n\nclass y { #fo\\u0020 }\n\nclass z { #\\u0020oo }\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 85
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Private identifier cannot contain escape characters - start: 10, end: 13
✖ Private identifier cannot contain escape characters - start: 50, end: 53
✖ Private identifier cannot contain escape characters - start: 73, end: 74

```

