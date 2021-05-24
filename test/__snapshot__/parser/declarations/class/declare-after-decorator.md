# Kataw parser test case

## Input

`````js
class A {
  @dec declare foo
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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
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
                    "elements": [],
                    "flags": 32,
                    "start": 9,
                    "end": 9
                },
                "flags": 7,
                "start": 32,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "decoratorList": [
                    {
                        "kind": 34611453,
                        "expression": {
                            "kind": 134299649,
                            "text": "dec",
                            "rawText": "dec",
                            "flags": 96,
                            "start": 13,
                            "end": 16
                        },
                        "flags": 0,
                        "start": 13,
                        "end": 16
                    }
                ],
                "flags": 32,
                "start": 13,
                "end": 16
            },
            "classKeyword": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 24,
                "end": 28
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 28,
                    "end": 28
                },
                "flags": 28,
                "start": 32,
                "end": 30
            },
            "flags": 16,
            "start": 9,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "class A {\n  @dec declare foo\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 9, end: 13
✖ Missing an opening brace - '{ - start: 28, end: 30

```

