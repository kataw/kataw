# Kataw parser test case

## Input

`````js
class K {
    #𝑚 = 4;
    #𝑀 = 5;
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
                "text": "K",
                "rawText": "K",
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
                                "text": "#\ud835",
                                "rawText": "#\ud835",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 16
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 16
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 16
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 4,
                "rawText": "4",
                "flags": 96,
                "transformFlags": 0,
                "start": 19,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 19,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67191035,
                "text": "#\ud835",
                "rawText": "#\ud835",
                "flags": 96,
                "transformFlags": 0,
                "start": 22,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 22,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 5,
                "rawText": "5",
                "flags": 96,
                "transformFlags": 0,
                "start": 32,
                "end": 34
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 32,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "class K {\n    #𝑚 = 4;\n    #𝑀 = 5;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid character - start: 14, end: 15
✖ Invalid character - start: 16, end: 17
✖ The parser expected to find a '}' to match the '{' token here - start: 16, end: 17
✖ Declaration or statement expected - start: 17, end: 19
✖ Invalid character - start: 27, end: 28
✖ Private identifiers are not allowed outside class bodies - start: 22, end: 29
✖ Invalid character - start: 29, end: 30
✖ '; ' is not allowed here. Did you mean ';'? - start: 29, end: 30
✖ Declaration or statement expected - start: 30, end: 32
✖ Declaration or statement expected - start: 35, end: 37

```

