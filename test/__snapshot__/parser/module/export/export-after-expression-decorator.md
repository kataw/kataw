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
                                "decoratorList": [
                                    {
                                        "kind": 34611453,
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
                                "start": 15,
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
                                    "elements": [
                                        {
                                            "kind": 280,
                                            "decorators": null,
                                            "declaredToken": null,
                                            "staticToken": null,
                                            "asyncKeyword": null,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "class",
                                                "rawText": "class",
                                                "flags": 96,
                                                "start": 25,
                                                "end": 31
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 25,
                                            "end": 31
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 25,
                                    "end": 31
                                },
                                "flags": 25,
                                "start": 32,
                                "end": 31
                            },
                            "flags": 32,
                            "start": 13,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 31
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 33,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 31,
                            "end": 34
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 31,
                        "end": 34
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 34
            },
            "flags": 33554448,
            "start": 0,
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
✖ Missing an opening brace - '{ - start: 25, end: 31
✖ Expression expected - start: 31, end: 33
✖ ',' expected - start: 31, end: 33
✖ Missing initializer in destructuring declaration - start: 34, end: 34

```

