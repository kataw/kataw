# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, allowTypes: true }
`````


## Input

`````js
class X {
  x = "y"
  [computed]: string
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
                "text": "X",
                "rawText": "X",
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
                                "kind": 130,
                                "member": {
                                    "kind": 201392131,
                                    "text": "y",
                                    "rawText": "\"y\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 19
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "computed",
                                    "rawText": "computed",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 31
                                },
                                "flags": 32,
                                "transformFlags": 4,
                                "start": 15,
                                "end": 32
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 32
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 32
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "transformFlags": 0,
                "start": 33,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 33,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "class X {\n  x = \"y\"\n  [computed]: string\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 32, end: 33
✖ Declaration or statement expected - start: 40, end: 42

```

