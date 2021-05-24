# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: n
> :: test: declaration
> :: case: yield\n a
## Input

`````js
class C { yield\n a }
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
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 9,
                                "end": 15
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 9,
                            "end": 15
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 15
                },
                "flags": 7,
                "start": 32,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 16,
                "end": 17
            },
            "flags": 16,
            "start": 16,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 17,
                "end": 19
            },
            "flags": 16,
            "start": 17,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "class C { yield\\n a }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 9, end: 15
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 9, end: 15
✖ Invalid hexadecimal escape sequence - start: 15, end: 15
✖ The parser expected to find a '}' to match the '{' token here - start: 15, end: 16
✖ Expected a `;` - start: 17, end: 19
✖ Declaration or statement expected - start: 19, end: 21

```

