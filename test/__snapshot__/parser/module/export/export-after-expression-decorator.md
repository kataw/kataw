# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
let MyClass = @foo export class {}
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
                            "text": "MyClass",
                            "rawText": "MyClass",
                            "flags": 96,
                            "start": 3,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 189,
                            "decorators": {
                                "kind": 207,
                                "elements": [
                                    {
                                        "kind": 34611453,
                                        "decoratorToken": {
                                            "kind": 34611453,
                                            "flags": 64,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 15,
                                            "end": 18
                                        },
                                        "flags": 0,
                                        "start": 15,
                                        "end": 18
                                    }
                                ],
                                "flags": 32,
                                "start": 13,
                                "end": 18
                            },
                            "classKeyword": null,
                            "name": null,
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 262,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 18,
                                    "end": 18
                                },
                                "flags": 18,
                                "start": 32,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 13,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 18
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 18
            },
            "flags": 33554448,
            "start": 0,
            "end": 18
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "start": 18,
                "end": 25
            },
            "declaration": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 80,
                    "start": 25,
                    "end": 31
                },
                "name": null,
                "typeParameters": null,
                "tail": {
                    "kind": 277,
                    "classHeritage": null,
                    "body": {
                        "kind": 262,
                        "elements": [],
                        "flags": 32,
                        "start": 33,
                        "end": 33
                    },
                    "flags": 31,
                    "start": 32,
                    "end": 34
                },
                "flags": 16,
                "start": 25,
                "end": 34
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "start": 18,
            "end": 34
        }
    ],
    "isModule": true,
    "source": "let MyClass = @foo export class {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening brace - '{ - start: 19, end: 25
✖ Lexical declaration expected - start: 18, end: 25
✖ A class declaration without the 'default' modifier must have a name. - start: 31, end: 33

```

