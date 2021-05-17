# Kataw parser test case

## Input

`````js
class K extends {} {;async\n async *1(){}}
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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "K",
                "rawText": "K",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [],
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 17,
                "end": 17
            },
            "flags": 16,
            "start": 15,
            "end": 18
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 168,
                        "flags": 16,
                        "start": 20,
                        "end": 21
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 96,
                            "start": 21,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 21,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 20,
                "end": 26
            },
            "flags": 16,
            "start": 18,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 27,
                "end": 28
            },
            "flags": 16,
            "start": 27,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "start": 28,
                    "end": 34
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 34,
                    "end": 36
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 201392130,
                        "text": 1,
                        "rawText": "1",
                        "flags": 96,
                        "start": 36,
                        "end": 37
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 38,
                        "end": 38
                    },
                    "flags": 268435488,
                    "start": 36,
                    "end": 39
                },
                "flags": 32,
                "start": 28,
                "end": 39
            },
            "flags": 16,
            "start": 28,
            "end": 39
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 40,
                "end": 40
            },
            "flags": 16,
            "start": 39,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "class K extends {} {;async\\n async *1(){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 7, end: 15
✖ Invalid hexadecimal escape sequence - start: 21, end: 26
✖ Invalid hexadecimal escape sequence - start: 26, end: 26
✖ Expected a `;` - start: 26, end: 27
✖ Expected a `;` - start: 28, end: 34
✖ Expected a `;` - start: 39, end: 40
✖ Declaration or statement expected - start: 41, end: 42

```

