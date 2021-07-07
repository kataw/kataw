# Kataw parser test case

## Input

`````js
class C { \\u0041 }
`````

## Options

### Parser Options

`````js
{}
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
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 9
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "A",
                "rawText": "\\u0041",
                "flags": 16480,
                "transformFlags": 0,
                "start": 11,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 11,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "class C { \\\\u0041 }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 9, end: 10
✖ The parser expected to find a '}' to match the '{' token here - start: 10, end: 11
✖ Declaration or statement expected - start: 17, end: 19

```

